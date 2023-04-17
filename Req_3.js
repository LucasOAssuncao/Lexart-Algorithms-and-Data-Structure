javascript;
function generateId() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const generateSection = (length) => {
    let section = '';

    for (let i = 0; i < length; i++) {
      section += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return section;
  };

  const id = `${generateSection(4)}-${generateSection(4)}-${generateSection(
    4
  )}-${generateSection(4)}`;

  if (
    id.match(
      /^([A-Za-z0-9]){4}-([A-Za-z0-9]){4}-([A-Za-z0-9]){4}-([A-Za-z0-9]){4}$/
    )
  ) {
    return id;
  } else {
    return generateId();
  }
}

const id = generateId();
console.log(id);
