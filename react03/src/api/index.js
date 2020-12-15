import {httpGet} from '../utils/http'
import base from './base'
const api={
    fetchProducts(){
        return httpGet(base.baseUrl+base.getProducts)
    }
}
export default api