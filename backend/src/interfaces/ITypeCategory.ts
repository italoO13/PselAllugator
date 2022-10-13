export default interface IProductCategory {
  id?: number;
  typeCategory: TypeCategory
}

type TypeCategory = 'Entrada' | 'Intermediário' | 'Top de linha';