interface Alerm {
    price: number

    alert(s: string): string
}

interface Alerm {
    weight: number

    alert(s: string, n: number): string
}

interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
