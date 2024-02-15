import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Memecard = ({ img, id, title}) => {
  
  return (

    <div>
      <Card key={id} className="mt-6 w-56 bg-gray-800 text-white">
        <CardHeader color="blue-gray" className="relative h-36">
          <img src={img} alt="Meme" className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/edit/${encodeURIComponent(img)}`}>
            <Button color="blue">Edit</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>

    // <div>
    //   <Card key={id} className="mt-6 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-800 text-white">
    //     <CardHeader color="blue-gray" className="relative h-36">
    //       <img src={img} alt="Meme" className="object-cover w-full h-full" />
    //     </CardHeader>
    //     <CardBody>
    //       <Typography variant="h5" color="white" className="mb-2">
    //         {title}
    //       </Typography>
    //     </CardBody>
    //     <CardFooter className="pt-0">
    //       <Link to={`/edit/${encodeURIComponent(img)}`}>
    //         <Button color="blue">Edit</Button>
    //       </Link>
    //     </CardFooter>
    //   </Card>
    // </div>
  );
}
export default Memecard
