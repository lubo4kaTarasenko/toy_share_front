import {Toys } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { useAtom } from 'jotai'
import {categoriesAtom } from '../atoms/appAtoms'
import ProductsApi from '../services/productsApi';
import CategoriesPopover from './categoriesPopover';

export default function CategoriesList() {
  // const [products, setProducts] = useAtom(productsAtom)
  // const [pages, setPages] = useAtom(pagesAtom)
  const [categories, setCategories] = useAtom(categoriesAtom)
  // const [params, setParams] = useAtom(paramsAtom)

  return(
    <div id='categories'>
      <div className="category_container, checked_category" id='undefined'>               
          <IconButton className='category_btn'
            onClick={() => {} }>
            <Toys className='category_icon' fontSize='large'/>
              All categories
          </IconButton>
        </div>
      { categories.map(category =>                
        <div key={category.id}  className="category_container" id={`${category.id}`} > 
          <CategoriesPopover category={category}/>   
         <IconButton className='category_btn'
            onClick={() => {} } >
            <Toys className='category_icon' fontSize='large'/>
              {category.name}            
          </IconButton>               
        </div>
      )}
    </div>
    )}
    //     <CategoriesPopover category={category}/> 
//     function categoryChoose(c){
//       let elems = document.getElementsByClassName('checked_category');
//       [].forEach.call(elems, function(el) {
//         el.classList.remove("checked_category");
//       });
//       document.getElementById(`${c}`).classList.add('checked_category');

//       params.category = c;
//       params.subcategory = ''
//       setParams(params)

//       new ProductsApi().getListByParams(params).then(
//         (result) => {
//           dispatchUpdateState(result.products, result.pages)
//         },
//       )    
//     }
//     function dispatchUpdateState(products, pages){
//       setProducts(products)
//       setPages(pages)
//     }
// }