import React from 'react';
import './styles.css'

export default function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{ title }</h3>
      </div>
      <div className="card-body">
        { children }
      </div>
    </div>
  );
}
