import Personaje from '../../assets/Personaje.png';
import Logo from '../../assets/Logo.png';
import { motion } from 'framer-motion';
import { slipeUp, slipeInFromSide } from '../../utility/animation';

export const Hero = () => {
    return (
        <section className="mt-36">
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                {/* textos y discripciones */}
                <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
                    <motion.img src={Logo} alt='Logo del juego' variants={slipeUp(0.2)} initial='initial' animate='animate' />
                    <motion.p className='py-12 text-white' variants={slipeUp(0.3)} initial='initial' animate='animate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestias repellat fugiat, aut nisi sit odio non dolores debitis natus culpa consequatur sunt officiis provident quia adipisci pariatur repudiandae. Dolores dolorem expedita harum a voluptatem! Quaerat officia laboriosam ab ipsam impedit nostrum tempore possimus expedita, alias non, dolorum labore mollitia eum exercitationem magnam quae reiciendis, quis maxime atque odit. Consequatur accusantium ipsam nobis error a facere, velit ab corrupti deserunt, fuga libero culpa officiis fugiat consequuntur modi veniam debitis aliquam qui minima explicabo ipsa aliquid quos? Nihil enim quia quo cupiditate natus eos possimus, amet error soluta, ducimus, voluptatibus eveniet.</motion.p>
                    <motion.div className='flex justify-center gap-4' variants={slipeUp(1)} initial='initial' animate='animate'>
                        <a className='bg-purple-600 py-2 px-12 rounded-xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer ' >Jugar ahora <i className="bi bi-controller text-xl ml-2" ></i></a>
                        <a className='text-white flex items-center cursor-pointer' >Ver GamePlay <i className="bi bi-youtube text-xl ml-2"></i></a>
                    </motion.div>
                </div>
                {/* imagen */}
                <motion.div
                    className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
                    variants={slipeInFromSide('right', 0.5)}
                    initial='initial'
                    animate='animate'
                >
                    <img src={Personaje} alt='Personaje del juego' />
                </motion.div>
            </div>
        </section>
    );
}


