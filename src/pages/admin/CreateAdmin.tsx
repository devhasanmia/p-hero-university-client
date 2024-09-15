
const CreateAdmin = () => {
  console.log("Clicked Create Admin Button");
  return (
    <div>
      <div className="userEarn">
        <div className="box">
          <div>Create Admin</div>
          <button onClick={() => {
            console.log(`Clicked ${1 + 1} times`);
          }}>Clicked</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAdmin     