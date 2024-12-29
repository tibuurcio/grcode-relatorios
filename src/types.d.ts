declare global {
  interface Window {
    gCodeConfigs: {
      baseUrl: string;
      slug: string;
    };
  }
}

export type Classe = "CONJUNTO" | "DUPLA" | "INDIVIDUAL" | "TRIO";

export interface Data {
  nome: string;
  clube: string;
  classe: Classe;
  categoria_ordem: string | number;
  categoria_descricao: string;
  categoria_nome: string;
  categoria_nivel_group: string;
  categoria_nivel: string | number;
  aparelho: string;
  estagio: "FINAL" | "CLASSIFICATÓRIA";
  nota_da1: number;
  nota_db1: number;
  nota_tot_dbda: number;
  nota_tot_exe: number;
  nota_tot_art: number;
  nota_tot_ded: number;
  nota_final: number;
}
