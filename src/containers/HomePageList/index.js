import { connect } from 'react-redux';
import HomePageList from '../../components/HomePageList';
import {
  updateHomePageListAction, clearUnreadAction
} from './homePageListAction';
import { updateAllChatContentAction, relatedCurrentChatAction } from '../../redux/actions/chatContentAction';

const mapStateToProps = state => ({
  homePageList: state.homePageListState,
  allChatContent: state.allChatContentState
});

const mapDispatchToProps = dispatch => ({
  updateAllChatContent(arg = {}) {
    dispatch(updateAllChatContentAction({ ...arg }));
  },
  updateHomePageList(arg = {}) {
    dispatch(updateHomePageListAction({ ...arg }));
  },
  relatedCurrentChat(arg) {
    dispatch(relatedCurrentChatAction(arg));
  },
  clearUnread(arg = {}) {
    dispatch(clearUnreadAction({ ...arg }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageList);
