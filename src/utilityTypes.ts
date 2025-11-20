type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">;
type ProductWithoutStock = Omit<Product, "stock" | "color" | "price">;
type AllRequired = Required<Product>;

const product: AllRequired = {
  id: 123,
  name: "3asdf",
  price: "asdf",
  stock: 1234,
  color: "waqer",
};
// make all product pertial
type OptionPertial = Partial<Product>;
type ReadOnlyProducts = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 123,
  name: "asdf",
  price: 234,
};
