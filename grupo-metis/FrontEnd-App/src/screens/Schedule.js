import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Cols } from 'react-native-table-component';
import Collapsible from 'react-native-collapsible';
import { SSchedule as tstyle,  gstyle, width, colors } from '../styles';
import { ArrowDown, ArrowUp, BackButton } from '../../assets/svgs';

const Schedule= ({navigation}) => {
    const [activeDay, setActiveDay] = useState(null);

    const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

    const schedule = {
        Time: ['07:10', '08:00', '08:50', '10:00', '10:50', '11:40'],
        Segunda: ['Matemática', 'Português', 'Português', 'Química', 'Física', 'Física'],
        Terça: ['Matemática', 'Português', 'Português', 'Química', 'Física', 'Física'],
        Quarta: ['Matemática', 'Português', 'Português', 'Química', 'Física', 'Física'],
        Quinta: ['Matemática', 'Português', 'Português', 'Química', 'Física', 'Física'],
        Sexta: ['Matemática', 'Português', 'Português', 'Química', 'Física', 'Física'],
    };

    return (
        <View style={tstyle.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: width * 0.15}}>
                <TouchableOpacity style={gstyle.goBackButton} onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
                <Text style={[gstyle.bold, tstyle.title, {flex: 1}]}>Horários de aula</Text>
            </View>
            {/* //> Faz um botão e um colapsable para cada item da array dayOfWeek */}
            {daysOfWeek.map((day) => (
                // !Essa view usa a chave key, disponibilizando-a para todos os componentes dentro dela
                <View key={day} style={tstyle.dayContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setActiveDay(activeDay === day ? null : day)}
                        style={[tstyle.dayButton, activeDay === day ? tstyle.altDayButton : null]}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center', flex:0, alignSelf: 'stretch', justifyContent: 'space-between'}}>
                            <Text style={[gstyle.bold, tstyle.dayText]}>{day}</Text>
                            {activeDay === day? 
                            <ArrowUp height={32} width={32}/> 
                            :<ArrowDown height={32} width={32}/>}
                        </View>
                    </TouchableOpacity>
                    <Collapsible duration={300} style={[tstyle.collapsible, activeDay !== day ? {display: 'none'} : null]} collapsed={activeDay !== day}>
                        <View style={tstyle.scheduleContainer}>
                            {schedule[day]?
                                <Table borderStyle={{borderWidth: 1, borderColor: 'white'}}>
                                    <Row data={['Horário', 'Matéria']} height={30} flexArr={[1,3]} textStyle={tstyle.textTable}/>
                                    <TableWrapper style={tstyle.wrapper}>
                                        <Cols data={[schedule.Time, schedule[activeDay]]} style={{height: width * 0.4}} textStyle={tstyle.textTable} flexArr={[1, 3]}/>
                                    </TableWrapper>
                                </Table>
                            : <Text style={tstyle.textTable}>Nenhum horário para mostrar</Text>}
                        </View>
                    </Collapsible>
                </View>
            ))}
        </View>
    );
};

export default Schedule;