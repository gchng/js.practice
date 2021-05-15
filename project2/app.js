let data = [
    {
        name: 'turtle',
        age: '30'
    },
    {
        name: 'timbo',
        age: '4'
    },
    {
        name: 'birdbowl',
        age: '-8'
    },
    {
        name: 'book',
        age: '11'
    },
    {
        name: 'positive polly',
        age: '58'
    },
    {
        name: 'door',
        age: 'yes'
    },
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + 'Name: ' + item.name + '<br>' + 'Age: ' + item.age + ' years old' + '</div>';
})

info.innerHTML = details.join('\n'); 