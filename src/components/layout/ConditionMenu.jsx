import React, { useState, useEffect } from 'react';
import '../../assets/css/home/ConditionMenu.css';

const conditionData = [
  { name: "Knee Pain", subItems: ["ACL Injury", "Meniscus Tear", "Arthritis"] },
  { name: "Enlarged Prostate", subItems: ["BPH", "Prostate Embolization"] },
  { name: "Thyroid Nodule", subItems: ["Benign Nodules", "Cancer Evaluation"] },
  { name: "Varicocele", subItems: ["Male Infertility", "Varicocele Embolization"] },
  { name: "Fallopian Tube Block", subItems: ["Tubal Recanalization", "Infertility"] },
  { name: "Uterine Fibroids", subItems: ["UFE", "Heavy Bleeding", "Pain"] },
  { name: "Varicose Veins", subItems: ["Laser Treatment", "Sclerotherapy"] },
  { name: "Interventional", subItems: ["Liver", "Kidney", "Lung", "Vascular"] },
];

const ConditionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.condition-item-wrapper')) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="condition-menu">
      {conditionData.map((item, index) => (
        <div key={index} className="condition-item-wrapper">
          <div
            className="condition-item"
            onClick={() => handleToggle(index)}
          >
            {item.name} <span className="arrow">▼</span>
          </div>
          {activeIndex === index && (
            <div className="dropdown">
              {item.subItems.map((sub, subIndex) => (
                <div key={subIndex} className="dropdown-item" onClick={() => console.log("Clicked", sub)}>
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConditionMenu;
