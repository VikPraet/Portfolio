const Divider = () => {
    return (
        <div className="my-12 flex items-center justify-center max-w-screen-lg mx-auto">
          {/* Dashed line on the left */}
          <div className="flex-grow border-t border-dashed border-gray-400"></div>
    
          {/* Programming symbols in the center */}
          <span className="mx-4 text-2xl font-mono">
            <span className="text-color-1">{'{'}</span>
            <span className="text-gray-400">{'<'} / {'>'}</span>
            <span className="text-color-1">{'}'}</span>
          </span>
    
          {/* Dashed line on the right */}
          <div className="flex-grow border-t border-dashed border-gray-400"></div>
        </div>
      );
    };
  
  export default Divider;
  