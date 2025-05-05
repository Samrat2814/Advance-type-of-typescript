{
    // utility types
    // pick 
    type Person = {
        name:string;
        age:number;
        email?:string;
        contact : string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>


    // omit bad dewa
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // require

    type PersonREquired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // ReadOnly

    type PersonREadOnly = Readonly<Person>
    const person1 :Person = {
        name:'x',
        age:200,
        contact:'01790'

    }
    person1.name = "yz"

    // Record
    // type MyObj = {
    //     a:string;
    //     b:string
    // }

    type MyObj = Record<string,string>

    const EmptyObj : Record<string,unknown> = {
        
    }

    const obj1 : MyObj = {
        a:"aa",
        b:"cc",
        c:"dd",
        d:"err"
    }
















    // 
}