export type Categoria = "novidades" | "homem" | "mulher" | "tenis" | "acessorios";

export interface Produto {
  id: number;
  modelo: string;
  cores: string;
  tamanho: string[];
  ref: string;
  precoOriginal: number;
  precoPromocional?: number;
  categorias: Categoria[];
}

export const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    modelo: "Camiseta BLV Channel Azul",
    cores: "Azul",
    tamanho: ["P", "M", "G", "GG"],
    ref: "0001",
    precoOriginal: 80.0,
    categorias: ["novidades", "homem", "mulher"],
  },
  {
    id: 2,
    modelo: "Camiseta BLV Channel Off White",
    cores: "Off White",
    tamanho: ["P", "M", "G", "GG"],
    ref: "0002",
    precoOriginal: 80.0,
    categorias: ["novidades", "homem", "mulher"],
  },
  {
    id: 3,
    modelo: "Camiseta Good Times Preta",
    cores: "Preto",
    tamanho: ["P", "M", "G", "GG"],
    ref: "1001",
    precoOriginal: 99.0,
    categorias: ["novidades", "homem"],
  },
  {
    id: 4,
    modelo: "Camiseta Listras Departamento Criativo",
    cores: "Colorido",
    tamanho: ["P", "M", "G", "GG"],
    ref: "2002",
    precoOriginal: 110.0,
    precoPromocional: 79.9,
    categorias: ["novidades", "homem", "mulher"],
  },
  {
    id: 5,
    modelo: "Jaqueta Mountain Dins",
    cores: "Ciano",
    tamanho: ["P", "M", "G", "GG"],
    ref: "5112",
    precoOriginal: 890.0,
    precoPromocional: 699.9,
    categorias: ["novidades", "homem"],
  },
  {
    id: 6,
    modelo: "CUMBI",
    cores: "Tigris Brown",
    tamanho: ["Único"],
    ref: "0010",
    precoOriginal: 500.0,
    categorias: ["novidades", "acessorios"],
  },
  {
    id: 7,
    modelo: "CUMBI",
    cores: "All Black",
    tamanho: ["Único"],
    ref: "0011",
    precoOriginal: 500.0,
    categorias: ["novidades", "acessorios"],
  },
  {
    id: 8,
    modelo: "OSEI",
    cores: "Brown",
    tamanho: ["Único"],
    ref: "4003",
    precoOriginal: 580.0,
    categorias: ["novidades", "acessorios"],
  },
  {
    id: 9,
    modelo: "OSEI",
    cores: "Camel Yellow",
    tamanho: ["Único"],
    ref: "4004",
    precoOriginal: 580.0,
    categorias: ["novidades", "acessorios"],
  },
  {
    id: 10,
    modelo: "Bolsa Expeditions",
    cores: "Bege",
    tamanho: ["Único"],
    ref: "9404",
    precoOriginal: 300.0,
    categorias: ["novidades", "acessorios"],
  },
  {
    id: 11,
    modelo: "MINI MOCHILA GARDEN",
    cores: "Rosa/Preto",
    tamanho: ["Único"],
    ref: "2289",
    precoOriginal: 150.0,
    categorias: ["novidades", "acessorios", "mulher"],
  },
  {
    id: 12,
    modelo: "TENIS TRUCK",
    cores: "Bege",
    tamanho: ["36", "37", "38", "39", "40", "41"],
    ref: "1878",
    precoOriginal: 1200.0,
    categorias: ["novidades", "tenis"],
  },
  {
    id: 13,
    modelo: "Tênis Old Skool Black White",
    cores: "Preto",
    tamanho: ["36", "37", "38", "39", "40", "41"],
    ref: "8126",
    precoOriginal: 379.0,
    precoPromocional: 299.9,
    categorias: ["novidades", "tenis", "homem", "mulher"],
  },
  {
    id: 14,
    modelo: "Tênis Old Skool Navy",
    cores: "Azul",
    tamanho: ["36", "37", "38", "39", "40", "41"],
    ref: "8127",
    precoOriginal: 379.0,
    categorias: ["novidades", "tenis", "homem", "mulher"],
  },
  {
    id: 15,
    modelo: "Tênis Ultrarange Rapidweld Black White",
    cores: "Preto",
    tamanho: ["36", "37", "38", "39", "40", "41"],
    ref: "8235",
    precoOriginal: 699.9,
    categorias: ["novidades", "tenis"],
  },
];
