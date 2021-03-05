import React from "react";


function Container() { 
    return (  
        <div>

            <Filter>
                    <Card>
                        <EmployeeInfo></EmployeeInfo>
                        <FilterForm>
                        Search Here
                        </FilterForm>
                    </Card>
                </Filter>

        </div>

    ); //end return
}

export default Container;