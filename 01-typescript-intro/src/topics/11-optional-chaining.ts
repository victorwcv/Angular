interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Fernando",
};

const passenger2: Passenger = {
    name: "Melisa",
    children: ["Jose", "Juan"],
};

const printChildrent = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length ?? "No Children";

    console.log(howManyChildren);
    
}

printChildrent(passenger1)
printChildrent(passenger2)