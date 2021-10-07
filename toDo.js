const toDo = [];
let quit = 0;

while(quit == 0) {
    let what = prompt('What would you like to do?')
    if (what == 'new') {
        let add = prompt('Enter new todo');
        let same = false;
        if (toDo.length > 0) {
            for (let q = 0; q < toDo.length; q++) {
                if (toDo[q] == add) {
                    same = true;
                    break;
                }
            } 
            if (same == true) {
                alert('You have already entered this!')
            } else {
                const newEntry = toDo.push(add);
                console.log(`${add} was added to the list`);
            }
        } else {
            const newEntry = toDo.push(add);
            console.log(`${add} was added to the list`);
        }
    } else if (what == 'list') {
        console.log('********');
        for (let j = 0; j < toDo.length; j++) {
            console.log(j, toDo[j]);
        }
        console.log('********');
    } else if (what == 'del') {
        let del = prompt('Enter an index to delete');
        let found = false;
        for (let i = 0; i < toDo.length; i++) {
            if (del == i) {
                toDo.splice(i, 1);
                found = true;
            }
        }
        found == true ? console.log(`Todo Removed`) : console.log(`Index not found`);
    } else if (what == 'q') {
        quit = 1;
        console.log(`App was closed`)
    } else {
        alert('Invalid comand!')
    }
}