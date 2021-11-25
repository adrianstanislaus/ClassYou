import Cta_teacher from "./cta_teacher";

export default function ClassCardTeacher(){
    return(
        <li class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://media-exp1.licdn.com/dms/image/C561BAQFq6G0mq1ZEqQ/company-background_10000/0/1541532451544?e=2159024400&v=beta&t=B6FDSZ2natJAEWWWkQEckB_2G6HJNWbCq1OswETikxI" alt="Man looking at item at a store"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cooking 101</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Cooking 101</a>
                <p class="mt-2 text-black">Every Friday 16.00-19.00</p>
                <p class="mt-2 text-gray-500">Students: 30</p>
                </div>
                <div>
                <Cta_teacher/>
                </div>
            </div>
        </li>
    );
};