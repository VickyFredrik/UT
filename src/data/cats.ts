export interface Cat{
    nama: string;
    file: string;
    id: number; 
}
const cats: Cat[]= [
    {
        nama: 'Kantor UT Manado',
        file: '/assets/img/cipa.jpg'
        id: 1
    },
    {
        nama: 'UT UPBJJ Manado ',
        file: '/assets/img/cipo.jpg'
        id: 2
    }
];

export const getCats =() => cats;
export const getCat =(id: number) =>cats.find(m=> m.id ===id);