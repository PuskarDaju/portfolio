import ProjectOne from  "../assets/shopManagement - Copy.png";
import ProjectTwo from "../assets/ecommmerce.png";
import ProjectThree from "../assets/blog.avif";

const ProjectsData={
    1:{
        title:"Inventory Management System",
        image:ProjectOne,
        description:(
            <>
            <p>
            It is designed to simplify inventory management and billing processes for small and medium-sized businesses. This system enables efficient tracking of stock levels, seamless product management, and accurate invoice generation, ensuring smooth business operations. By integrating user-friendly interfaces and robust functionality, this project showcases my skills in designing practical software solutions that address real-world needs.
            </p>
            </>
        ),
        github:"https://github.com/PuskarDaju/Inventory_management_system.git",
    },
    2:{
        title:"E-commerce",
        image:ProjectTwo,
        description:(
            <>
            <p>
               
The E-commerce Platform is designed to provide a seamless online shopping experience for users while enabling businesses to efficiently showcase and sell their products. It includes features such as intuitive navigation, secure payment integration, product catalog management, and order tracking. This project highlights the ability to create scalable and functional solutions tailored to the needs of modern online retail.
            </p>
            </>
        ),
        github:"https://github.com/PuskarDaju/e_commerce.git",
       

    },
    3:{
        title:"Blog-API",
        image:ProjectThree,
        description:(
            <>
            <p>
            The Blog API is built to provide a robust backend for managing blog content and interactions. It supports features such as creating, reading, updating, and deleting blog posts, managing user authentication, and handling comments. Designed with scalability and efficiency in mind, this API ensures seamless integration with front-end applications and offers a solid foundation for dynamic content management systems.
            </p>
            </>
        ),
        github:"https://github.com/PuskarDaju/BlogApp-laravel-.git",
       

    }
}
export default ProjectsData;