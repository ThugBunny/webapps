interface Enemy {
readonly size: number,
health: number,
range: number,
readonly damage: number
}

let tank: Enemy = {
size: 50,
health: 100,
range: 60,
damage: 12
}

// Todo bien
tank.health = 95;
// Error porque la propiedad es de solo lectura
tank.damage = 10;
