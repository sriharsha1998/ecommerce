// Removed invalid import as Product is defined locally

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: 29999,
    description: "Latest smartphone model with advanced features",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    stock: 10,
  },
  {
    id: 2,
    name: "Laptop",
    price: 49999,
    description: "High-performance laptop for professionals",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    stock: 5,
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 999,
    description: "Comfortable cotton t-shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Clothing",
    stock: 20,
  },
  {
    id: 4,
    name: "Jeans",
    price: 1999,
    description: "Classic blue denim jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Clothing",
    stock: 15,
  },
  {
    id: 5,
    name: "Novel",
    price: 499,
    description: "Bestselling fiction novel",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Books",
    stock: 30,
  },
  {
    id: 6,
    name: "Sofa",
    price: 29999,
    description: "Comfortable 3-seater sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    stock: 5,
  },
  {
    id: 7,
    name: "Football",
    price: 999,
    description: "Professional football",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Sports",
    stock: 25,
  },
  {
    id: 8,
    name: "Lipstick",
    price: 499,
    description: "Long-lasting matte lipstick",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Beauty",
    stock: 40,
  },
  {
    id: 9,
    name: "Action Figure",
    price: 799,
    description: "Collector's edition action figure",
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Toys",
    stock: 15,
  },
  {
    id: 10,
    name: "Car Model",
    price: 1499,
    description: "Detailed die-cast car model",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Automotive",
    stock: 10,
  },
  {
    id: 11,
    name: "Cricket Bat",
    price: 1999,
    description: "Professional cricket bat",
    image:
      "https://plus.unsplash.com/premium_photo-1679917506577-6c986f6faab6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
    stock: 25,
  },
  {
    id: 12,
    name: "Headphones",
    price: 4999,
    description: "Noise-cancelling over-ear headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    stock: 30,
  },
  {
    id: 13,
    name: "Stylish Jacket",
    price: 899,
    description: "Trendy Leather jacket",
    image:
      "https://images.unsplash.com/photo-1633345755125-6d451a1124c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Clothing",
    stock: 15,
  },
  {
    id: 14,
    name: "Cube Games",
    price: 129,
    description: "Fun and challenging cube games",
    image:
      "https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Toys",
    stock: 50,
  },
  {
    id: 15,
    name: "Teddy Bear",
    price: 599,
    description: "Soft and cuddly teddy bear",
    image:
      "https://plus.unsplash.com/premium_photo-1725075087109-5ee07f242436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlZGR5YmVhcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Toys",
    stock: 20,
  },
  {
    id: 16,
    name: "BasketBall",
    price: 89,
    description: "High-quality basketball",
    image:
      "https://images.unsplash.com/photo-1595795279832-13f0df36fbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D",
    category: "Sports",
    stock: 25,
  },
  {
    id: 17,
    name: "BhagavadGita",
    price: 199,
    description: "Holy book",
    image:
      "https://media.istockphoto.com/id/1277842282/photo/bhagavad-gita-and-rosary-lying-on-a-wooden-table-and-incense-is-being-smoked.jpg?s=2048x2048&w=is&k=20&c=KZwVNQKTqjpfeDhiyG-h_sRLnjeePS4qNFClrvHkV20=",
    category: "Books",
    stock: 50,
  },
  {
    id: 18,
    name: "Iron Box",
    price: 189,
    description: "The best iron box",
    image:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Home",
    stock: 36,
  },
  {
    id: 19,
    name: "Washing Machine",
    price: 19999,
    description: "Automatic washing machine",
    image:
      "https://images.unsplash.com/photo-1593642632823-9b4c7f8e1a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhc2hpbmd8ZW58MHx8MHx8fDA%3D",
    category: "Home",
    stock: 15,
  },
];
