import Link from 'next/link'
const SideMenu = (props) => {
	return (
		<>
		<h1 className="my-4">{props.AppName}</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
		  <Link href="#"><a onClick={props.ClickAlert} className="list-group-item">Alert props link</a></Link>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
		</>
	)
}

export default SideMenu