import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { useState, useEffect, forwardRef } from 'react'
import http from "../../../../../@core/core/services/interceptore";
import { useQuery } from "react-query";

function carModelList({
    id,
    fullName,
    typeName,
    statusName,
    levelName,
    cost,
    title,
    refetch,
    isActive,
    isdelete,
  }) 


        const getAllCourses = async () => {
            const result = await http.get(
            `/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query${search}`
            );
            // console.log(result);
            return result;
        };
        const { data, status, refetch } = useQuery(["getAllCourses" , search], getAllCourses);

        const [carModelList, setCarModelList] = useState([])
         const renderTableData = () => {
             return carModelList.map((val) => (
                 <tr>
                     <td>{val.fullName}</td>
                      <td>{val.typeName}</td> 
                      <td>{val.statusName}</td>
                </tr>) 
                ) 
            } 
            return ( 
            <table id='table'>
                 <thead>
                     <tr> 
                        <th className="text-nowrap ">نام دوره</th>
                        <th className="text-nowrap ">مدرس دوره</th>
                        <th className="text-nowrap ">نوع دوره</th>
                    </tr> 
                </thead> 
                <tbody> 
                    {renderTableData()} 
                </tbody> 
                </table> );