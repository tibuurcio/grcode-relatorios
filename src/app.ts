// https://grdesportiva.bubbleapps.io/version-test/api/1.1/meta/swagger.json

import { Data } from "./types";

// Comment for disabling cache
import * as response from "./data.json";
import { AparelhoLabels, ColunaLabels } from "./labels";
import {
  mapToOptions,
  groupByKey,
  twoLevels,
  groupByTwoKeys,
  TwoKeysDivider,
} from "./utils";

const { baseUrl, slug } = window.gCodeConfigs;

$(function () {
  const selectRelatorio = document.querySelector("#select_relatorio");
  const selectClasse = document.querySelector("#select_classe");
  const selectCategoria = document.querySelector("#select_categoria");
  const selectNivel = document.querySelector("#select_nivel");

  const tabelaRelatorio: HTMLTableElement =
    document.querySelector("#grcode_relatorios_table") ??
    document.createElement("table");

  let dadosProcessados;
  let categoriaAtual;

  // fetch(`${baseUrl}/api/1.1/wf/resultados-individual?slug=${slug}`)
  //   .then((response) => response.json())
  //   .then((response) => {
  //     // TODO loading
  //     selectRelatorio.disabled = false;
  //     dadosProcessados = processarDados(response.data);
  //     console.log(dadosProcessados);
  //   })
  //   .catch(console.error);

  // Comment for disabling cache
  selectRelatorio.disabled = false;
  dadosProcessados = processarDados(response.data);
  console.log(dadosProcessados);

  selectRelatorio.addEventListener("change", function (event) {
    console.log("Select Relatório:", event.target.value);
    if (!event.target.value) {
      limparSelects();
      return;
    }

    if (!dadosProcessados) {
      return;
    }

    const relatorio = event.target.value;

    if (relatorio === "GERAL") {
      selectNivel.parentElement.classList.remove("d-none");
      // handleRelatorioGeral();
    } else if (relatorio === "POR_APARELHO") {
      selectNivel.parentElement.classList.add("d-none");
      // handleRelatorioPorAparelho();
    }

    const classes = Object.keys(
      relatorio === "GERAL"
        ? dadosProcessados.groupedByCategoriaNivel
        : dadosProcessados.groupedByCategoriaDescricao
    );

    selectClasse.innerHTML = mapToOptions(classes, "Escolha sua classe");
    selectClasse.addEventListener("change", selectClasseEventListener);

    selectCategoria.addEventListener("change", selectCategoriaEventListener);

    return;
  });

  /** Handle async data */

  function processarDados(data: Data[]) {
    data.forEach((row) => {
      row.categoria_ordem = Number(row.categoria_ordem);
      row.categoria_nivel = Number(row.categoria_nivel);
      [
        "nome",
        "clube",
        "categoria_nome",
        "categoria_descricao",
        "categoria_nivel_group",
      ].forEach((key) => (row[key] = row[key].trim()));
    });

    const groupedByClasse = groupByKey(data, "classe");

    const groupedByCategoria = twoLevels(groupedByClasse, "categoria_nome");

    const groupedByCategoriaNivel = Object.keys(groupedByCategoria).reduce(
      (acc, currGroup) => {
        acc[currGroup] = twoLevels(
          groupedByCategoria[currGroup],
          "categoria_nivel"
        );
        return acc;
      },
      {}
    );

    const groupedByCategoriaDescricao = twoLevels(
      groupedByClasse,
      "categoria_descricao"
    );

    const ordemCategoriasPorAparelho = {};
    data.forEach((data) => {
      if (!ordemCategoriasPorAparelho[data.categoria_descricao]) {
        ordemCategoriasPorAparelho[data.categoria_descricao] =
          data.categoria_ordem;
      }
    });

    return {
      data,
      groupedByCategoriaNivel,
      groupedByCategoriaDescricao,
      ordemCategoriasPorAparelho,
    };
  }

  function limparTabela() {
    // check if table is already a DataTable instance
    if ($.fn.DataTable.isDataTable("#grcode_relatorios_table")) {
      $("#grcode_relatorios_table").DataTable().destroy();
      $("#grcode_relatorios_table thead tr").empty();
      $("#grcode_relatorios_table tbody").empty();
    }
  }

  function setTableGeral() {
    const classe = selectClasse.value;
    const categoria = selectCategoria.value;
    const nivel = selectNivel.value;

    if (!classe || !categoria || !nivel) {
      return;
    }

    const data =
      dadosProcessados.groupedByCategoriaNivel[classe][categoria][nivel];

    const aparelhosDisponiveis = new Set(data.map((row) => row.aparelho));

    const groupedByNameAndClube = groupByTwoKeys(data, "nome", "clube");

    const processedData = Object.keys(groupedByNameAndClube).map(
      (nomeAndClube) => {
        const rows = groupedByNameAndClube[nomeAndClube];
        const nota_total = rows.reduce((acc, row) => acc + row.nota_final, 0);

        const [nome, clube] = nomeAndClube.split(TwoKeysDivider);

        return {
          nome,
          clube,
          aparelhos: rows.map((row) => ({
            aparelho: row.aparelho,
            nota_tot_dbda: row.nota_tot_dbda,
            nota_tot_art: row.nota_tot_art,
            nota_tot_exe: row.nota_tot_exe,
            nota_tot_ded: row.nota_tot_ded,
            nota_final: row.nota_final,
          })),
          nota_total,
        };
      }
    );

    console.log({
      data,
      rows: groupByKey(data, "nome"),
      processedData,
    });

    // TODO Adicionar imagem dos aparelhos?
    const tableHeader = tabelaRelatorio.querySelector("thead");
    const colunas = [
      "index",
      "nome",
      "clube",
      ...[...aparelhosDisponiveis]
        .map((aparelho) => [
          `nota_tot_dbda_${aparelho}`,
          `nota_tot_art_${aparelho}`,
          `nota_tot_exe_${aparelho}`,
          `nota_tot_ded_${aparelho}`,
          `nota_final_${aparelho}`,
        ])
        .flat(),
      "nota_final",
    ];

    tableHeader.innerHTML = `
      <tr>
        <th rowspan="2" class="align-middle" data-dt-order="disable">#</th>
        <th rowspan="2" class="align-middle">Nome</th>
        <th rowspan="2" class="align-middle">Clube</th>
        ${[...aparelhosDisponiveis]
          .map(
            (aparelho) =>
              `<th colspan="5" data-dt-order="disable" class="text-center">${AparelhoLabels[aparelho]}</th>`
          )
          .join("")}
        <th rowspan="2" class="align-middle">Nota Total</th>
      </tr>
      <tr>
        ${[...aparelhosDisponiveis]
          .map(
            () =>
              `
                <th data-dt-order="disable">D</th>
                <th data-dt-order="disable">A</th>
                <th data-dt-order="disable">E</th>
                <th data-dt-order="disable">Ded</th>
                <th>Tot</th>
              `
          )
          .join("")}
      </tr>
    `;

    const tbody = tabelaRelatorio.querySelector("tbody");

    const avg = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
    processedData.sort((a, b) => {
      if (b.nota_total === a.nota_total) {
        return (
          avg(b.aparelhos.map((aparelho) => aparelho.nota_tot_exe)) -
          avg(a.aparelhos.map((aparelho) => aparelho.nota_tot_exe))
        );
      }

      return b.nota_total - a.nota_total;
    });

    // TODO: Tratar atletas que não tem os 2 aparelhos
    processedData.forEach((data, index) => {
      data.index = index + 1;
      const row = document.createElement("tr");
      const notasRows: string[] = data.aparelhos.map(
        (aparelho) => `
        <td class="text-end text-nowrap">${formatNumber(
          aparelho.nota_tot_dbda
        )}</td>
        <td class="text-end text-nowrap">${formatNumber(
          aparelho.nota_tot_art
        )}</td>
        <td class="text-end text-nowrap">${formatNumber(
          aparelho.nota_tot_exe
        )}</td>
        <td class="text-end text-nowrap">${formatNumber(
          aparelho.nota_tot_ded
        )}</td>
        <td class="text-end text-nowrap">${formatNumber(
          aparelho.nota_final
        )}</td>
      `
      );

      if (notasRows.length < aparelhosDisponiveis.size) {
        const emptyRows = Array.from(
          { length: aparelhosDisponiveis.size - notasRows.length },
          () => `<td></td><td></td><td></td><td></td><td></td>`
        );
        notasRows.push(...emptyRows);
      }

      row.innerHTML = `
        <td>${data.index}</td>
        <td>${data.nome}</td>
        <td>${data.clube}</td>
        ${notasRows.join("")}
        <td class="text-end text-nowrap">${formatNumber(data.nota_total)}</td>
      `;

      tbody.appendChild(row);
    });

    // // check if table is already a DataTable instance
    recarregarDataTables(colunas);
  }

  function setTablePorAparelho() {
    const classe = selectClasse.value;
    const categoria = categoriaAtual;

    if (!classe || !categoria) {
      return;
    }

    const colunas = [
      "index",
      "nome",
      "clube",
      "aparelho",
      "nota_tot_dbda",
      "nota_tot_art",
      "nota_tot_exe",
      "nota_tot_ded",
      "nota_final",
    ];

    const numberColumns = new Set([
      "nota_tot_dbda",
      "nota_tot_art",
      "nota_tot_exe",
      "nota_tot_ded",
      "nota_final",
    ]);

    const tableHeader = tabelaRelatorio.querySelector("thead");

    colunas.forEach((coluna) => {
      const th = document.createElement("th");
      th.textContent = ColunaLabels[coluna];
      tableHeader.appendChild(th);
    });

    const dados =
      dadosProcessados.groupedByCategoriaDescricao[classe][categoria];

    const tableBody = tabelaRelatorio.querySelector("tbody");

    dados.sort(sortData);
    dados.forEach((data, index) => {
      data.index = index + 1;
      const row = document.createElement("tr");
      colunas.forEach((coluna) => {
        const cell = document.createElement("td");
        const cellData = data[coluna];

        if (numberColumns.has(coluna)) {
          cell.classList.add("text-end");
          cell.classList.add("text-nowrap");
          cell.textContent = formatNumber(cellData);
        } else {
          cell.textContent = cellData;
        }

        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    recarregarDataTables(colunas);
  }

  function sortData(a, b) {
    if (b.nota_final === a.nota_final) {
      return b.nota_tot_exe - a.nota_tot_exe;
    }

    return b.nota_final - a.nota_final;
  }

  /** Handle async data */

  function recarregarDataTables(colunas) {
    console.log(
      "Recarregando DataTables para categoria:",
      categoriaAtual,
      colunas,
      dadosProcessados
    );

    $("#grcode_relatorios_table").DataTable({
      ordering: true,
      keys: true,
      fixedHeader: true,
      paging: false,
      order: [
        [0, "asc"],
        [colunas.length - 1, "desc"],
        // [colunas.length - 3, "desc"],
      ],
      // columns: {
      //   defaultContent: "",
      // },
      layout: {
        topStart: "buttons",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging",
      },
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json",

        // datetime: {
        //   weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        // },
      },
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Exportar a Excel",
          autoFilter: true,
          className: "btn btn-success",
          exportOptions: {
            columns: ":visible",
          },
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fa-solid fa-file-pdf"></i> ',
          titleAttr: "Exportar para PDF",
          orientation: "landscape",
          className: "btn btn-danger",
          exportOptions: {
            columns: ":visible",
          },
        },
      ],
    });
  }

  /** Handle Selects */

  function limparSelects() {
    selectRelatorio.value = "";
    selectClasse.innerHTML = selectClasse.children[0].outerHTML;
    selectCategoria.innerHTML = selectCategoria.children[0].outerHTML;
    selectNivel.innerHTML = selectNivel.children[0].outerHTML;

    selectClasse.removeEventListener(selectClasseEventListener);
    selectCategoria.removeEventListener(selectCategoriaEventListener);
    selectNivel.removeEventListener(selectNivelEventListener);
  }

  function setCategoriaOptions() {
    const relatorio = selectRelatorio.value;
    const classe = selectClasse.value;
    if (!relatorio || !classe) return;

    let categorias;
    if (relatorio === "GERAL") {
      categorias = Object.keys(
        dadosProcessados.groupedByCategoriaNivel[classe]
      );
    } else if (relatorio === "POR_APARELHO") {
      categorias = Object.keys(
        dadosProcessados.groupedByCategoriaDescricao[classe]
      );
      categorias.sort((a, b) => {
        return (
          dadosProcessados.ordemCategoriasPorAparelho[a] -
          dadosProcessados.ordemCategoriasPorAparelho[b]
        );
      });
    }

    if (!categorias) return;

    selectCategoria.innerHTML = mapToOptions(
      categorias,
      "Escolha sua categoria"
    );
  }

  function selectClasseEventListener(event) {
    if (!dadosProcessados) {
      return;
    }

    setCategoriaOptions();
  }

  function selectCategoriaEventListener(event) {
    console.log({ categoriaAtual, nova: event.target.value });
    if (event.target.value && categoriaAtual !== event.target.value) {
      categoriaAtual = event.target.value;
      const relatorio = selectRelatorio.value;
      if (!!relatorio && relatorio === "POR_APARELHO") {
        limparTabela();
        setTablePorAparelho();
      } else if (!!relatorio && relatorio === "GERAL") {
        const niveis = Object.keys(
          dadosProcessados.groupedByCategoriaNivel[selectClasse.value][
            categoriaAtual
          ]
        );

        selectNivel.innerHTML = mapToOptions(niveis, "Escolha o nível");
        selectNivel.addEventListener("change", selectNivelEventListener);
      }
    }
  }

  function selectNivelEventListener(event) {
    if (event.target.value) {
      limparTabela();
      setTableGeral();
    }
  }

  function formatNumber(value) {
    return typeof value === "number" ? value.toFixed(2) : value;
  }
});
