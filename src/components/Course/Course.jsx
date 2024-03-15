

const Course = ({course}) => {
    const {name,description,photo,price,credit} = course
    return (
        <div>
          <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="flex items-center">
        <div className="flex-1">Price:{price}</div>
        <div className="flex-1">Credit:{credit}</div>
    </div>
    <div className="card-actions ">
      <button className="btn w-full bg-sky-200">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;