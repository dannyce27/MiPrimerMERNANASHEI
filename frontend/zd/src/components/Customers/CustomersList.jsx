import React from "react";
import CustomersCard from "./CustomersCard";

const CustomersList = ({ customers, deleteCustomers, updateCustomers }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Clientes
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {customers?.length===0 && <div className="text-center text-gray-500">Cargando...</div>}

        {customers?.map((customer) => (
          <CustomersCard
            key={customer._id}
            customer={customer}
            deleteCustomers={deleteCustomers}
            updateCustomers={updateCustomers}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomersList;