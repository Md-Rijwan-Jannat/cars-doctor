import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
const Teams = () => {
    return (
        <div className="mb-12">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-red-600">Team</h3>
                <h1 className="text-6xl ">Meet Our Team</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /> do not look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card btn w-full h-full hover:bg-base-100 border-none bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-500">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <div className="card-actions flex items-center gap-3">
                            <img className='w-12' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                            <img className='w-7' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
                            <img className='w-7' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" />
                            <img className='w-9' src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card btn w-full h-full hover:bg-base-100 border-none bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-500">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <div className="card-actions flex items-center gap-3">
                            <img className='w-12' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                            <img className='w-7' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
                            <img className='w-7' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" />
                            <img className='w-9' src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card btn w-full h-full hover:bg-base-100 border-none bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-500">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <div className="card-actions flex items-center gap-3">
                            <img className='w-12' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                            <img className='w-7' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
                            <img className='w-7' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" />
                            <img className='w-9' src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;