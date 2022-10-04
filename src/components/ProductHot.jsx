import { Heart, HeartStraight, HeartStraightBreak, MagnifyingGlassPlus, Star } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { DetailReducer } from '../redux/Reducers/Detail';

export default function ProductHot({name,price,img,likecount,_id}) {
    const dispatch = useDispatch();
    const handleSeeDetail = () => {
        dispatch(DetailReducer.actions.setIDDetail(_id));
    }
  return (
    <div className="group flex flex-col justify-between rounded mx-2 bg-white shadow h-full overflow-hidden">
    <div className="relative h-[73%]">
        <img src={img} className="w-full h-full object-contain"></img>
        <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a href="view.html"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                <MagnifyingGlassPlus size={24} weight="bold" />
            </a>
            <a href="#"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                <HeartStraight size={24} weight="bold" />
            </a>
        </div>
    </div>
    <div className="pt-4 pb-3 px-4">
        <Link to={'/detail'} onClick={handleSeeDetail} >
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                {name}
            </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-roboto font-semibold">${price}</p>
            {/* <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p> */}
        </div>
        <div className="flex items-center gap-x-2">
            <div className="flex gap-1 text-sm text-yellow-400">
                <Star size={32} weight="fill" />
                <Star size={32} weight="fill" />
                <Star size={32} weight="fill" />
                <Star size={32} weight="bold" />
                <Star size={32} weight="bold" />
            </div>
            <div className="flex text-xl text-[#999] font-semibold">
                <p>({likecount} lượt đánh giá)</p>
            {/* <Heart size={32} weight="bold" className='text-red-500' /> */}
            </div>
        </div>
    </div>
    <a href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        Add to Cart
    </a>
</div>
  )
}
