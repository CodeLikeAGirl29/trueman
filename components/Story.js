const Story = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Quote <span data-number={1} />
				</h5>
				{/* quote */}
				<blockquote
					className="trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					Adapt what is useful, reject what is useless, and add what is
					specifically your own.
				</blockquote>
				{/* quote end */}
			</div>
		</div>
	);
};
export default Story;
