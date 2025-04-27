import React, { useState } from "react";

export default function CrudApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = formData;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, formData]);
    }
    clearForm();
  };

  const handleEdit = (index) => {
    setFormData(list[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    if (editIndex === index) {
      clearForm();
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
    });
    setEditIndex(null);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD ReactJS + Table</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-md">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editIndex !== null ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Data List Table */}
      {list.length > 0 && (
        <table className="w-full border mt-8">
          <thead>
            <tr className="bg-gray-300">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.phone}</td>
                <td className="border p-2">{item.gender}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
