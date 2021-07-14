import React from "react";
import "./css/snackbar.css"
import burger from './Images/burger.jpg'
import { IoFastFoodOutline } from "react-icons/io5";

export default function Snackbar() {
  return (
   <main>
     <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table className = "min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
          <tr >
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
          <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div  class="flex-shrink-0 h-20 w-20" >
                <img src={burger} alt="burger" class="h-20 w-20 rounded-full" />
                </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-lg text-gray-900 ">
                  burgers
                </div>
              
              </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">TAKE</a>
                </div>
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">DROP</a>
                </div>
                </td>

         </tr>
         <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div  class="flex-shrink-0 h-20 w-20" >
                <img src={burger} alt="burger" class="h-20 w-20 rounded-full" />
                </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-lg text-gray-900 ">
                  burgers
                </div>
              
              </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">TAKE</a>
                </div>
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">DROP</a>
                </div>
                </td>

         </tr>
         <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div  class="flex-shrink-0 h-20 w-20" >
                <img src={burger} alt="burger" class="h-20 w-20 rounded-full" />
                </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-lg text-gray-900 ">
                  burgers
                </div>
              
              </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">TAKE</a>
                </div>
                <div>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">DROP</a>
                </div>
                </td>

         </tr>
      </tbody>
    </table>
   
      </div>
      </div>
      </div>
      </div>
      <div>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">  Food Generator</button>
      </div>
      </main>
  );
}
