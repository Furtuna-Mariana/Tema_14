class Animal {
    constructor(picioare, areCoada) {
        this.picioare = picioare;
        this.areCoada = areCoada;
    }
}

class Pisica extends Animal {
    constructor(picioare, areCoada) {
        super(picioare, areCoada);
        this.specification = 'Pisica face miau';
    }
}

class Caine extends Animal {
    constructor(picioare, areCoada) {
    super(picioare, areCoada)
    this.specification = 'Cainele face Ham';
}
}

const miau = new Pisica({picioare: 4, areCoada: true});
const ham = new Caine({picioare: 4, areCoada: true});

console.log('miau', miau);
console.log('ham', ham);