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
### Without Hyphens
Databases and source control solutions often expect uuids without hyphens. You can create a uuid without hyphens by passing in any truthy param. When you create a uuid wihtout hyphens, it will have 32 characters instead of 36:

```javascript
// Create uuids without hyphens:
const id1 = uuid(true)
const id2 = uuid(123)
const id3 = uuid('whatever')
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
