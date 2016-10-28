var EditMember = props => (
	<div className='group-member'>
		<input className='member-name' placeholder='Name' defaultValue={props.name}></input>
		<input className='ig-username' placeholder='Instagram Username' defaultValue={props.instagram}></input>
		<input className='twitter-username' placeholder='Twitter Username' defaultValue={props.twitter}></input>
	</div>
);

window.EditMember = EditMember;