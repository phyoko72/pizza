import PizzaCard from "./PizzaCard";

const PizzaList = () => {
    return (
        <div className=" max-w-screen-xl m-auto">
            <div className=" flex flex-col items-center px-5 py-3 ">
                <h1 className=" uppercase text-2xl font-bold text-center">the best pizza in town</h1>
                <p className="lg:w-3/4 text-justify my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis laudantium ut consectetur illum odio ducimus, corrupti, voluptas facere molestiae dicta ea praesentium distinctio sed. Fugit autem odio dolor deleniti cupiditate.                
                </p>
                <div className="flex flex-col flex-wrap md:flex-row justify-around items-center bg-white gap-1">
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                </div>                
            </div>
        </div>
    );
}
 
export default PizzaList;