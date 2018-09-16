# @composi/uuid

This function creates an RFC4122 version 4 compliant uuid. The type is string. Each uuid will have 36 characters.

## Install

```
npm install --save-dev @composi/uuid
```

## Using

To create a uuid:

```javascript
const productId = uuid()
```

Assign unique ids to an array of products:

```javascript
products = products.map(product => (product.id = uuid())
```

Use prodoct ids (uuids) as keys for dynamic list:

```javascript
function List(props) {
  return (
    <ul>
      {
        props.data.map(item => <li key={item.id}>item.name</li>)
      }
    </ul>
  )
}
```
