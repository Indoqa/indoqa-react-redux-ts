export interface Address {
  street?: string,
  city?: string,
  zipCode: string,
  country: string,
}

export interface User {
  id: string,
  name: string,
  email: string,
  lastModified: Date,
  addresses: Address[],
}
