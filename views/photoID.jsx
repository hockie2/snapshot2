var React = require("react");
const cloudinary = require('cloudinary').v2;

var Navbar = require('./components/navbar.jsx');

// class CommentRowsList extends{

//     postComment(){
//         //ajax
//         //setState
//     }
//     render(){
//         <div>
//         <button onClick={postComment}>Submit</button>
//        {

//          this.state.commentsList.map(()=> (<CommentRow></CommentRow>))
//        }
//        </div>
//     }
// }
// class CommentRow extends{

//     render(){

//     }
// }
class PhotoID extends React.Component {



  render() {


    var post_comment = "/gallery/"+this.props.photoID +"?_method=POST";
    // var post_comment = "/hello";


    console.log(this.props.comments);
    let comments = this.props.comments.map(comment=>{
        return <div className="comment_box">
                    <a href={'/photographer/'+ comment.username}><img src={cloudinary.url(comment.public_id)} /></a>
                    <div className="comment">{comment.comment}</div>
                </div>
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/navbar.css"/>
            <link rel="stylesheet" type="text/css" href="/css/home.css"/>
            <link rel="stylesheet" type="text/css" href="/css/photoID.css"/>
            <link href="https://fonts.googleapis.com/css?family=Abel|Caveat&display=swap" rel="stylesheet"/>
        </head>
        <body>
            <header>
              <Navbar/>
            </header>
            <div className="main_content_wrapper">
                <div className="main_card_wrapper">
                    <div className="photo_wrapper">
                        <img src={cloudinary.url(this.props.photos.public_id)} />
                        <span className="details" id="photo_caption">{this.props.photos.caption}</span>
                    </div>
                    <div className="details_main_wrapper">
                        <div className="photographer">
                            <span id="photographer_label">Photographer:</span>
                            <a href={"/photographer/"+ this.props.photos.username}><span className="details">{this.props.photos.username}</span></a>
                        </div>
                        <div className="details_wrapper">
                            <span className="details"><box-icon name='camera' ></box-icon>{this.props.photos.camera}</span>
                            <span className="details"><box-icon name='aperture'></box-icon>{this.props.photos.aperture}</span>
                            <span className="details"><box-icon name='timer'></box-icon>{this.props.photos.shutter}</span>
                            <span className="details"><img src="/iso.png" style={{width:"20px", marginRight:"5px"}}/>{this.props.photos.iso}</span>
                        </div>
                    </div>
                    <a href="javascript:history.back(-1)" id="back"><box-icon name='left-arrow' type='solid' color='#ffffff' ></box-icon>BACK</a>

                </div>
                <div className="main_comment_wrapper">
                    <div className="comment_input">
                        <img src={cloudinary.url(this.props.userProfilePic)} />
                        <textarea rows="5" cols="20" name="comment_textarea" id="comment_textarea" public_id={this.props.userProfilePic} photoId={this.props.photos.id} ></textarea>
                    </div>
                    <div className="comments_wrapper">
                        {comments}
                    </div>
                </div>
            </div>
          <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
          <script src="/script.js"></script>


          </body>
      </html>
    );
  }
}

module.exports = PhotoID;
                        // <form action={post_comment} method="POST" id="new_comment">
