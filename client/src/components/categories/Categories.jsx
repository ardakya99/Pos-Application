import {PlusOutlined} from "@ant-design/icons";
import "./style.css";

const Categories = () => {
  return (
    <ul className="flex gap-4 md:flex-col overflow-y-auto text-lg">
        <li className="category-item">
            <span>Tümü</span>
        </li>
        <li className="category-item">
            <span>Yiyecek</span>
        </li>
        <li className="category-item">
            <span>İçecek</span>
        </li>
        <li className="category-item">
            <span>Meyve</span>
        </li>
        <li className="category-item">
            <span>Sebze</span>
        </li>
        <li className="category-item">
            <span>Kıyafet</span>
        </li>
        <li className="category-item">
            <span>Elektronik</span>
        </li>
        <li className="category-item">
            <span>Elektronik</span>
        </li>
        <li className="category-item">
            <span>Elektronik</span>
        </li>
        <li className="category-item">
            <PlusOutlined className="md:text-2xl"/>
        </li>
        
    </ul>
  )
}

export default Categories