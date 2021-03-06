import { ADD_PRODUCT,REMOVE_PRODUCT,UP_QUANTITY,DOWN_QUANTITY,CLEAR_ALL } from "./action-types";

const initialState = {
  products: [
    {
      id: 0,
      title:
        "ASUS VivoBook L203MA Ultra-Thin Laptop, 11.6” HD, Intel Celeron N4000 Processor (up to 2.6 GHz), 4GB RAM, 64GB eMMC, USB-C, Windows 10 in S Mode, One Year of Microsoft Office 365, L203MA-DS04",
      tags: "asus",
      shortName: "ASUS VIVOBOOK L203MA",
      quantity:1,
      price: 260,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/ASUS/thumb/TeoriV2-105166_large.jpg",
    },
    {
      id: 1,
      title:
        "ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit KB, Fingerprint, Windows 10 Home in S Mode, F512JA-AS34, Slate Gray",
        tags: "asus",
      shortName: "ASUS VIVOBOOK 15 THIN",
      quantity:1,
      price: 400,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/ASUS/thumb/TeoriV2-105164_large.jpg",
    },
    {
      id: 2,
      title:
        "ASUS TUF Gaming Laptop, 17.3” Full HD IPS Type, AMD Ryzen 5 3550H CPU, AMD Radeon RX560X, 8GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 5, Windows 10 Home - FX705DY-EH53",
        tags: "asus",
      shortName: "ASUS TUF GAMING",
      quantity:1,
      price: 500,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/ASUS/thumb/TeoriV2-107585_large.jpg",
    },
    {
      id: 3,
      title:
        "Asus ROG Strix G (2019) Gaming Laptop, 17.3” IPS Type FHD, NVIDIA GeForce GTX 1650, Intel Core i7-9750H, 16GB DDR4, 512GB PCIe Nvme SSD, RGB KB, Windows 10 Home, GL731GT-PH74",
        tags: "asus",
      shortName: "ASUS ROG STRIX",
      quantity:1,
      price: 2200,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/ASUS/thumb/TeoriV2-106598_large.jpg",
    },
    {
      id: 4,
      title:
        "2019 ASUS ROG 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 16GB DDR4, 1TB HDD + 512GB SSD, NVIDIA GeForce GTX 1650, 802.11ac WiFi, HDMI, USB 3.0, Windows 10",
        tags: "asus",
      shortName: "2019 ASUS TUF GAMING",
      quantity:1,
      price: 1000,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/ASUS/thumb/TeoriV2-106598_large.jpg",
    },
    {
      id: 5,
      title:
        "Apple 13.3 MacBook Pro with Touch Bar, Intel Core i5 Quad-Core, 8GB RAM, 128GB SSD - Mid 2019, Space Gray, MUHN2LL/A (Renewed)",
        tags: "apple",
      shortName: "APPLE 13.3 MACBOOK PRO",
      quantity:1,
      price: 985,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/APPLE/thumb/TeoriV2-101938-2_large.jpg",
    },
    {
      id: 6,
      title:
        "Apple 15.4 MacBook Pro with Touch Bar, Intel Core i7 Six-Core, 16GB RAM, 256GB SSD, AMD Radeon Pro 555X - Mid 2019, Space Gray (Renewed)",
        tags: "apple",
      shortName: "APPLE 15.4 MACBOOK PRO",
      quantity:1,
      price: 1600,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/APPLE/thumb/TeoriV2-105268-4_large.jpg",
    },
    {
      id: 7,
      title:
        "New HP 15.6 HD Touchscreen Laptop Intel Core i3-1005G1 8GB DDR4 RAM 128GB SSD HDMI Bluetooth 802.11/b/g/n/ac Windows 10 15-dy1731ms Silver",
        tags: "hp",
      shortName: "New HP 15.6 HD",
      quantity:1,
      price: 5000,
      img:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/HP/thumb/TeoriV2-105608_large.jpg",
    },
  ],
  cartList: [],
  addedItems:0,
  total:0
};

function rootReducer(state = initialState, action) {
  const { cartList, products,addedItems ,total} = state;
  // const data = [products[action.payload]];
  //FIND PRODUCT
  let addData = products.find((item) => item.id === action.payload);
  // IF WE HAVE SAME ITEM 
  let isItem = cartList.find((item)=>item.id === action.payload);
  // DELETE DATA
  let newData = cartList.filter(item=> item.id !== action.payload);

  
  
  //calculating the total

  switch (action.type) {


    case ADD_PRODUCT:
        if(isItem){
            isItem.quantity += 1
            return{
                ...state,
                cartList: [...state.cartList],
                total : state.total + addData.price
            }
        }else{
           
            return {
                ...state,
                cartList: [...state.cartList, addData],
                addedItems : addedItems + 1,
                total : state.total + addData.price
                
              }
        }
      
     case REMOVE_PRODUCT:

     const newTotal = total - (addData.price * addData.quantity);
        isItem.quantity = 1;
        
     return{
             ...state,
             cartList :newData,
             addedItems: addedItems -1 ,
             total : newTotal
        }
     

         case UP_QUANTITY :
             isItem.quantity += 1
             return {
                ...state,
                cartList: [...state.cartList],
                total : state.total + addData.price

             }
         case DOWN_QUANTITY :
            if(isItem.quantity === 1){
                return{
                    ...state,
                cartList: newData,
                addedItems: addedItems -1 ,
                total : state.total - addData.price 
                }
            }else{
                isItem.quantity -= 1
                return {
                    ...state,
                    cartList: [...state.cartList],
                    total : state.total - addData.price 
                }
            }
    default:
      return state;
  }
 
}

export default rootReducer;

