import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ImageStyle } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
// import CategoryListViewCell from "./CategoryListViewCell";
import Category from "../../models/Category";





export default class CategoryListView extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    أقسام الموسوعة الرئيسية
                </Text>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(212, "أحاديث رمضان")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"أحاديث رمضان"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(150, "التربية الإسلامية")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"التربية الإسلامية"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(104, "الحديث الشريف")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"الحديث الشريف"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(44, "الخطب")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"الخطب"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(97, "تفسير القرآن الكريم")} style={styles.listItemLongGray}>
                        <Image style={styles.imageFullItem  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"تفسير القرآن الكريم"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(114, "السيرة")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"السيرة"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(55, "العقيدة الإسلامية")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"العقيدة الإسلامية"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(142, "الفقه الإسلامي")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"الفقه الإسلامي"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(1229, "المؤلفات")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"المؤلفات"}</Text>
                    </TouchableOpacity>
                </View>
              
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(799, "ندوات تلفزيونية")} style={styles.listItemLongGray}>
                        <Image style={styles.imageFullItem  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"ندوات تلفزيونية"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(800, "محاضرات خارجية")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"محاضرات خارجية"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(1242, "موضوعات أدبية")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"موضوعات أدبية"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(175, "موضوعات إسلامية")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"موضوعات إسلامية"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(182, "موضوعات علمية")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"موضوعات علمية"}</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItemView}>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(1249, "موضوعات متنوعة")} style={styles.listItemYellowLight}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"موضوعات متنوعة"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onListViewCellClicked(801, "ندوات إذاعية")} style={styles.listItemYellow}>
                        <Image style={styles.image  }
                            source={require('../../assets/images/pattern_list_item.png')}
                        />
                        <Text numberOfLines={2} style={styles.listTitle}>{"ندوات إذاعية"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 2.4 * vh,
        // zIndex: 2,
    },
    title: {
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 18,
        textAlign: 'right',
        marginTop: 2 * vh,
        marginBottom: 1 * vh,
        color: AppConstant.Color.Black,
        paddingHorizontal: 2.4 * vh,
    },
    list: {
        marginTop: 1 * vh,
        marginBottom: 3 * vh,
    },
    columnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemGray: {
        backgroundColor: AppConstant.Color.Gray,
        minHeight: 16.1 * vh,
        width: 49.5 * vw,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 1 * vh,
    },
    listItemYellowLight: {
        backgroundColor: AppConstant.Color.Yellow,
        minHeight: 16.1 * vh,
        width: 50 * vw,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemYellow: {
        backgroundColor: AppConstant.Color.YellowDark,
        minHeight: 16.1 * vh,
        width: 50 * vw,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemLongYellow: {
        backgroundColor: AppConstant.Color.YellowDark,
        minHeight: 16.1 * vh,
        width: 100 * vw,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 1 * vh,
    },
    listItemLongGray: {
        backgroundColor: AppConstant.Color.Gray,
        minHeight: 16.1 * vh,
        width: 100 * vw,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%', height: 3.9 * vh, position: 'absolute', top: 0
    },
    imageFullItem: {
        width: '100%', height: 4.6 * vh, position: 'absolute', top: 0
    },
    listTitle: {
        color: AppConstant.Color.White,
        fontSize: 5 * vw,
        fontFamily: AppConstant.Font.SansArabic,
        paddingHorizontal: 5.6 * vw,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});