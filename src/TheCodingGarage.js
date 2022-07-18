
const loadNames = async () => {
    const response = await fetch('/src/data.json');
    const names = await response.json();
    return names;
}

const data = loadNames();
console.log(data)
