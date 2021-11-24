export default function ClassHeader(){
    return(
        <div className="grid md:grid-cols-2">
            <thumbnail className="border">
                <img className="h-48 w-full object-cover md:h-full" src="https://media-exp1.licdn.com/dms/image/C561BAQFq6G0mq1ZEqQ/company-background_10000/0/1541532451544?e=2159024400&v=beta&t=B6FDSZ2natJAEWWWkQEckB_2G6HJNWbCq1OswETikxI"/>
            </thumbnail>
            <classdesc className="border p-14 font-mono">
                <headtitle className="block font-bold text-2xl mt-1">
                 Cooking 101
                </headtitle>
                <subtitle className="block text-sm mt-1">
                Instructor: Chef Owo
                </subtitle>
                <ratings className="block mt-1">
                4.7/5
                </ratings>
                <schedule className="block font-semibold mt-1">
                Every Friday 16.00 - 19.00
                </schedule>
                <description className="block font-extralight mt-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit lobortis tempus ipsum porttitor eget scelerisque tellus. </p>
                </description>
                <cta className="flex space-x-2 mt-5 justify-end">
                    <button className="border p-2">Link to meet</button>
                    <button className="border p-2">Edit</button>
                    <button className="border p-2">Delete</button>
                </cta>
            </classdesc>
        </div>
    );
}