import React, { useState } from 'react';
import ReactFlow, {
  Controls,
} from 'react-flow-renderer';
import getFlowItems from './roadMapGeneratorHorizontal';
import CustomNode from './CustomNode';
import ModalDetails from './ModalDetails';

const nodeTypes = {
  periodo: CustomNode
};

const RoadMap = (props) => {

  const [showModal, setShowModal] = useState(false);

  const { data } = props;

  const [initialNodes, initialEdges] = getFlowItems(data);
  const onNodeClick = (_) => setShowModal(true);
  const { roadMap, ...escuela } = data;

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: "100%", height: "80vh" }} className="border-2 border-gray-400 rounded-xl flex flex-col h-full w-full items-center">
      <h2 className="">{escuela.name}</h2>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        zoomOnDoubleClick={true}
        panOnScroll={true}
        onNodeClick={onNodeClick}
        fitView
        attributionPosition="top-right"
      >
        <Controls />
      </ReactFlow>
      <ModalDetails
        open={showModal} setOpen={setShowModal} />
    </div>

  );
};

export default RoadMap;

