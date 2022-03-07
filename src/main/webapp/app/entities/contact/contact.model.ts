export interface IContact {
  id?: number;
  nom?: string | null;
  prenom?: string | null;
  mail?: string | null;
  numero?: string | null;
}

export class Contact implements IContact {
  constructor(
    public id?: number,
    public nom?: string | null,
    public prenom?: string | null,
    public mail?: string | null,
    public numero?: string | null
  ) {}
}

export function getContactIdentifier(contact: IContact): number | undefined {
  return contact.id;
}
