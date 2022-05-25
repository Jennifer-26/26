import React from "react";
import Products from "./Products";
import {StarFill,StarHalf,Star} from 'react-bootstrap-icons';


const Data = () => {

    const display=[
        {id:'e1',
        name:'Leave the World Behind',
        author:'by RUMAAN ALAM',
        imgUrl:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607471946-41TMXmkG7L.jpg',
        cost:'₹444',
        beforecost:'₹494',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarHalf/>, star_four:<Star/>, star_five:<Star/>},
        {id:'e2',
        name:'A Girl to Remember',
        author:'by AJAY K PANDEY',
        imgUrl:'https://rukminim1.flixcart.com/image/612/612/jlfh6kw0/book/3/9/3/a-girl-to-remember-original-imaf8k7ydryjgyek.jpeg?q=70',
        cost:'₹130',
        beforecost:'₹145',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<Star/>, star_five:<Star/>},
        {id:'e3',
        name:'Think Like a Monk',
        author:'by JAY SHETTY',
        imgUrl:'https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg',
        cost:'₹135',
        beforecost:'₹150',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarFill/>, star_five:<StarHalf/>},
        {id:'e4',
        name:'The Alchemist',
        author:'by PANLO COELHO',
        imgUrl:'https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Alchemist-book-cover.jpg',
        cost:'₹204',
        beforecost:'₹227',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarHalf/>, star_five:<Star/>},
        {id:'e5',
        name:'It Ends With Us',
        author:'by COLLEEN HOOVER',
        imgUrl:'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
        cost:'₹215',
        beforecost:'₹239',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<Star/>, star_five:<Star/>},
        {id:'e6',
        name:'Bloodline',
        author:'by SIDNEY SHELDON',
        imgUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298570618l/300225.jpg',
        cost:'₹252',
        beforecost:'₹281',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarFill/>, star_five:<Star/>},
        {id:'e7',
        name:'To Kill a Mocking Bird',
        author:'by HARPER LEE',
        imgUrl:'https://images-na.ssl-images-amazon.com/images/I/41h+cEZPA-L._SX307_BO1,204,203,200_.jpg',
        cost:'₹270',
        beforecost:'300',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarHalf/>, star_four:<Star/>, star_five:<Star/>},
        {id:'e8',
        name:'Atomic Habits',
        author:'by JAMES CLEAR',
        imgUrl:'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg',
        cost:'₹450',
        beforecost:'₹500',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarFill/>, star_five:<Star/>},
        {id:'e9',
        name:'Think Again',
        author:'by ADAM GRANT',
        imgUrl:'https://miro.medium.com/max/596/1*4uGAljLrdoKIIVKFaYWL1g.jpeg',
        cost:'₹139',
        beforecost:'₹155',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<Star/>, star_five:<Star/>},
        {id:'e10',
        name:'The Miniaturist',
        author:'by JESSIE BURTON',
        imgUrl:'https://i2-prod.mirror.co.uk/incoming/article7108657.ece/ALTERNATES/s615b/The-Miniaturist.jpg',
        cost:'₹243',
        beforecost:'₹270',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarHalf/>, star_five:<Star/>},
        {id:'e11',
        name:'Sweet Sorrow',
        author:'by DAVID NICHOLLS',
        imgUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561577656l/43203660._SY475_.jpg',
        cost:'₹540',
        beforecost:'₹600',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarFill/>, star_five:<Star/>},
        {id:'e12',
        name:'Anne of Green Gables',
        author:'by L.M MONTGOMERY',
        imgUrl:'https://cdn2.penguin.com.au/covers/original/9780099582649.jpg',
        cost:'₹207',
        beforecost:'₹230',
        star_one: <StarFill/>, star_two:<StarFill/>, star_three:<StarFill/>, star_four:<StarFill/>, star_five:<Star/>}
      ]

      return (
          
          <div>
              {display.map((item)=> (
        <Products title={item.name}
               author={item.author}
               img={item.imgUrl}
               rupee={item.cost}
               star_one={item.star_one} star_two={item.star_two} star_three={item.star_three} star_four={item.star_four} star_five={item.star_five}
               discount={item.beforecost}/>
               ))}
          </div>
          
      )



}

export default Data;