const firstName = 'Denis';
const secondName = 'Murray';
const age = 26;
const address = 'Ashford';
let html;

html = 
`<div>
  <ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${secondName}</li>
    <li>Age: ${age}</li>
    <li>Address: ${address}</li>
  </ul>
</div>
`;

document.body.innerHTML = html;