import React, { Fragment} from 'react'
import '../../../controllers/css/product.css'

const Item = ({ product, parseToRupiah, onSelectProductDelete, onSelectProductEdit}) => {
    const onClickDelete = (event) => {
        event.preventDefault();
        onSelectProductDelete(product);
    }
    const onClickEdit = (event) => {
        event.preventDefault();
        onSelectProductEdit(product);
    }
    return(
    <Fragment>
    <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-primary" data-toggle='modal' data-target='#editModal' onClick={onClickEdit}>Edit</button>
        <button type="button" class="btn btn-sm btn-primary" data-toggle='modal' data-target='#deleteModal'  onClick={onClickDelete} data-dismiss='modal'>Delete</button>
    </td>
    <td class='item'>{product.id}</td>
    <td class='item'>{product.name_product}</td>
    <td class='item'><img src={product.image}alt={product.image} style={{ maxHeight: 50 }}/></td>
    <td class='item'>{product.cardDesc}</td>
    <td class='desc'>{product.shortDesc}</td>
    <td class='desc'>{product.longDesc}</td>
    <td class='item'>{product.ingredients}</td>
    <td class='item'>{product.quantity}</td>
    <td class='item'>{parseToRupiah(product.price)}</td>
    <td class='item'>{product.name_category}</td>
    <td class='item'>{product.name_group}</td>
    <td class='item'>{product.date_added}</td>
    <td class='item'>{product.date_updated}</td>
    </tr>
    </Fragment>
    )
}
export default Item