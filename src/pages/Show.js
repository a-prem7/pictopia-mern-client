import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pic= props.pic;
  console.log(id);

  const spic= pic ? pic.find((p) => p._id === id) : null;

  const [editForm, setEditForm] = useState(spic);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (spic) {
      setEditForm(spic);
    }
  }, [spic]);